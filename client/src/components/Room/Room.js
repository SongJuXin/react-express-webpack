import React from 'react'
import {Table} from 'antd'
import styles from './style.css'
export default class Room extends React.Component {
    render(){
        return(<div>
            <p style={{color:'yellow'}}>room2</p>
            <p className={styles.red}>room1</p>
            <Table></Table>
        </div>)
    }
}
