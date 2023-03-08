import React, { useState } from 'react'
import Style from '../Styles/Insurance.module.css'

const INS_LINKS = [
    {
        name: 'Google',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit fugit asperiores cumque ullam quasi sit totam repellendus consectetur nam, quaerat nihil sed dicta rerum delectus. Esse placeat, voluptatibus possimus eum doloremque eligendi eaque sed totam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://google.com',
    },
    {
        name: 'Youtube',
        desc: 'Lorem ipsum dolor, sit amet consectetur adotam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://youtube.com',
    },
    {
        name: 'Yahoo',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit fugit asperiores cumque ullam quasi sit totam repellendus consectetur nam, quaerat nihil sed dicta rerum delectus. Esse placeat, voluptatibus possimus eum doloremque eligendi eaque sed totam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://yahoo.com',
    },
    {
        name: 'Yahoo',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit fugit asperiores cumque ullam quasi sit totam repellendus consectetur nam, quaerat nihil sed dicta rerum delectus. Esse placeat, voluptatibus possimus eum doloremque eligendi eaque sed totam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://yahoo.com',
    },
    {
        name: 'Yahoo',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit fugit asperiores cumque ullam quasi sit totam repellendus consectetur nam, quaerat nihil sed dicta rerum delectus. Esse placeat, voluptatibus possimus eum doloremque eligendi eaque sed totam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://yahoo.com',
    },
    {
        name: 'Yahoo',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo reprehenderit fugit asperiores cumque ullam quasi sit totam repellendus consectetur nam, quaerat nihil sed dicta rerum delectus. Esse placeat, voluptatibus possimus eum doloremque eligendi eaque sed totam perspiciatis minima! Magni eos dignissimos minus modi recusandae perferendis fugit fuga maxime id nesciunt?',
        url: 'https://yahoo.com',
    },
]

const Insurance = () => {
    const [shouldShow, setShouldShow] = useState(true)
    const handleSubmit = () => {
        setShouldShow(false)
    }
    return (
        <div className={Style.container}>
            <div className={Style.heading}>
                <h1>Insurance</h1>
            </div>
            {shouldShow && (
                <div className={Style.intro}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempora, quia cumque reprehenderit odio facilis omnis dolor,
                    inventore eum accusantium recusandae rerum earum
                    perferendis, ab at! Reprehenderit neque minus aut. Aliquid
                    quaerat, corrupti ratione quo adipisci odio laboriosam ipsam
                    quidem incidunt soluta tempora similique? Recusandae a amet,
                    qui atque consequatur perspiciatis eos nemo unde! Vel soluta
                    atque vitae aperiam error vero saepe assumenda omnis ipsam,
                    ducimus quod laboriosam est quam id accusantium placeat
                    laudantium quasi similique? Ullam accusamus corrupti
                    expedita at deleniti dignissimos delectus veniam maxime.
                    Accusamus optio veniam eius culpa, rem velit architecto
                    nesciunt ex molestiae cupiditate voluptatibus enim mollitia,
                    tenetur eligendi quasi corporis pariatur facere sunt. Cum
                    voluptatibus, expedita laborum assumenda ullam rem sit quos
                    tenetur ut temporibus architecto veniam, id corrupti
                    quisquam debitis vero modi tempore alias non blanditiis illo
                    deserunt et aperiam aspernatur. Cum fuga doloribus nesciunt
                    repellat at reiciendis quis, excepturi enim molestiae quas
                    iste eveniet!
                </div>
            )}

            <div className={Style['circle-2']}></div>
            {shouldShow ? (
                <form onSubmit={handleSubmit}>
                    <h2>Enter your details</h2>
                    <div className={Style.inputs}>
                        <div className={Style.form_group}>
                            <label htmlFor="zip-code">Zip Code</label>
                            <input type="text" id="zip-code" required />
                        </div>
                        <div className={Style.form_group}>
                            <label htmlFor="age">Age</label>
                            <input type="text" id="age" required />
                        </div>
                    </div>
                    <button className={Style['form-btn']}>Confirm</button>
                </form>
            ) : (
                <div className={Style.cards}>
                    {INS_LINKS.map((link, index) => (
                        <div className={Style.card} key={index}>
                            <h2>{link.name}</h2>
                            <p>{link.desc}</p>
                            <button className={Style.btn}>
                                <a
                                    href={link.url}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    Open
                                </a>
                            </button>
                        </div>
                    ))}
                </div>
            )}
            <div className={Style['circle-1']}></div>
        </div>
    )
}

export default Insurance
