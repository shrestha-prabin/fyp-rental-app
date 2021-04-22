import React, { useEffect, useState, useRef } from 'react'
import Pusher from 'pusher-js';
import ApiService from '../Service/ApiService';
import '../css/chat.css'

export default function Chat() {

    const messageEndRef = useRef(null)

    const [friendsList, setFriendsList] = useState([])
    const [chatWithUserId, setChatWithUserId] = useState(null)

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        ApiService.sendRequest('auth/user-profile', {}).then(res => {
        }).catch(err => {
        })

        fetchFriendList()
    }, [])

    useEffect(() => {
        const channelId = `message-channel`
        console.log('Chat channel id', channelId);

        Pusher.logToConsole = false;

        var pusher = new Pusher('280d627885cb1d1212a0', {
            cluster: 'ap2'
        });

        var channel = pusher.subscribe(channelId);
        channel.bind('message-event', function (data) {
            let userId = localStorage.getItem('userId')

            if (userId == data.sender_id) {
                console.log('Message Sent:', userId, data);
                fetchMessages(data.receiver_id)
            } else if (userId == data.receiver_id) {
                console.log('Message Received:', userId, data);
                fetchMessages(data.sender_id)
            }
        });
    }, [])
    
    useEffect(() => {
        fetchMessages(chatWithUserId)
    }, [chatWithUserId])

    const fetchFriendList = () => {
        ApiService.sendRequest('message/friend-list').then(res => {
            setFriendsList(res.data)
        }).catch(err => {
            alert(err)
        })
    }

    const fetchMessages = (receiver_id) => {
        ApiService.sendRequest('message/chat-history', {
            chat_with_user_id: receiver_id
        }).then(res => {
            let messages = res.data
            setMessages(messages)
            messageEndRef.current?.scrollIntoView()

        }).catch(err => {
            alert(err)
        })
    }

    const sendMessage = (e) => {
        e?.preventDefault()

        if (!newMessage) return

        let temp = messages
        temp.push({
            type: 'out',
            message: newMessage
        })
        setMessages(messages)

        messageEndRef.current?.scrollIntoView({ behavior: "smooth" })

        ApiService.sendRequest('message/send-message', {
            message: newMessage,
            receiver_id: chatWithUserId
        }).then(res => {
        }).catch(err => {
            alert(err)
        })

        setNewMessage('')
    }


    return (
        <div className='chat__container'>
            <div className='friends_list'>
                {
                    friendsList.map((item, i) => {
                        return <div key={i} className='friend_item' onClick={() => setChatWithUserId(item.id)}>
                            <img />
                            <div>
                                <div>{item.name}</div>
                                <small>{item.email}</small>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className='chat_box'>
                {
                    chatWithUserId && (
                        <div className='chat_history__container'>
                            <div className='chat_history'>
                                {
                                    messages.map((item, i) => {
                                        return <div key={i}>
                                            {
                                                item.type === 'in'
                                                    ? <div className='incoming'>
                                                        <label>
                                                            {item.sender.name}: {item.message}
                                                        </label>
                                                    </div>
                                                    : item.type === 'out' ?
                                                        <div className='outgoing'>
                                                            <label>{item.message}</label>
                                                        </div>
                                                        : <div />
                                            }
                                        </div>
                                    })
                                }
                                <br />
                                <br />
                                <br />
                                <span ref={messageEndRef}></span>
                            </div>

                            <form className='message_input' onSubmit={sendMessage}>
                                <input value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />

                                <button className='primary__button' onClick={sendMessage}>Send</button>
                            </form>

                        </div>
                    )
                }

            </div>

        </div>
    )
}
