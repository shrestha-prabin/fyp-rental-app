import React, { useEffect, useState } from 'react'
import Pusher from 'pusher-js';
import ApiService from '../Service/ApiService';
import '../css/chat.css'

export default function Chat() {

    const [friendsList, setFriendsList] = useState([])
    const [chatWithUserId, setChatWithUserId] = useState(null)

    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState('')

    useEffect(() => {
        fetchFriendList()
    }, [])

    useEffect(() => {
        if (chatWithUserId) {
            console.log('User changed:', chatWithUserId);

            Pusher.logToConsole = false;

            var pusher = new Pusher('280d627885cb1d1212a0', {
                cluster: 'ap2'
            });

            var channel = pusher.subscribe(`message-channel-${chatWithUserId}`);
            channel.bind('message-event', function (data) {
                console.log('Message Received:', data);
                fetchMessages()
            });
        }

        fetchMessages()

    }, [chatWithUserId])

    const fetchFriendList = () => {
        ApiService.sendRequest('message/friend-list').then(res => {
            setFriendsList(res.data)
        }).catch(err => {
            alert(err)
        })
    }

    const fetchMessages = () => {
        ApiService.sendRequest('message/chat-history', {
            chat_with_user_id: chatWithUserId
        }).then(res => {
            let messages = res.data
            setMessages(messages)
        }).catch(err => {
            alert(err)
        })
    }

    const addMessage = (message) => {
        if (!message) {
            return
        }
        let temp = messages
        temp.push(message)
        setMessages(temp)

        ApiService.sendRequest('message/send-message', {
            message: message,
            receiver_id: chatWithUserId
        }).then(res => {
        }).catch(err => {
            alert(err)
        })
    }

    const sendMessage = (e) => {
        if (e) {
            e.preventDefault()
        }
        addMessage(newMessage);
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
