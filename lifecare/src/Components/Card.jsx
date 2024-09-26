import React, { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';

export function Card(props) {
    const [title, setTitle] = useState(props.title);
    const [icon, setIcon] = useState(props.icon);
    const [backgroundColor, setBackgroundColor] = useState(props.backgroundColor);
    const [data, setData] = useState(props.data);
    const [additionalInfo, setAdditionalInfo] = useState(props.additionalInfo);
    const url = props.url;

    useEffect(() => {
        axios.get(`http://localhost:8080/analytics/${url}`)
            .then(res => {
                setData(res.data);
                setAdditionalInfo(res.data.additional);
            })
            .catch(err => console.error(err));
    }, [url]);

    return (
        <div className="card-container" style={{ backgroundColor: backgroundColor }}>
            <div className="card-header">
                <div className="card-icon">
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="card-title">
                    <h6>{title}</h6>
                </div>
            </div>
            <div className="card-body">
                <div className="card-data">
                    <h3>{data}</h3>
                </div>
                <div className="card-additional-info">
                    {additionalInfo && additionalInfo.map((info, index) => (
                        <div key={index} className="info-item">
                            <FontAwesomeIcon icon={info.icon} className="info-icon" />
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
