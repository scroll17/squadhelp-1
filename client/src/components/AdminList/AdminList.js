import React, {Component} from 'react';
import { Link } from "react-router-dom";
import style from './AdminList.module.sass';

import connect from "react-redux/es/connect/connect";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getAllUsers, banUserById } from "../../actions/actionCreator";
import ListTo from './ListTo/ListTo';
import ListItem from './ListItem/ListItem';


class AdminList extends Component {
    clickToBan = (userId, isBanned) => {
        this.props.banUserById(userId, isBanned);
    };

    bannedUsers = (users) =>{
        return users.filter(user => {
            return user.isBanned
        });
    };

    userParser(list) {
        return list.map( user => {
            return (
                <ListItem
                    name={`${user.firstName} ${user.lastName}`}
                    status={user.isBanned}
                    id={user.id}
                    clickToItem={this.clickToBan}
                    key={user.email}
                />
            )
        });
    }

    render() {
        const { users } = this.props;
        if(this.props.user && this.props.users.length === 0) this.props.getAllUsers();
        return (
            <>
                <div className={style.list} onMouseDown={(e) => {e.preventDefault()}}>
                    <ListTo active={this.bannedUsers(users)} clickToItem={this.clickToBan}/>
                    {this.userParser(users)}

                    <Link to={'/'} className={style.main}>
                        <div>
                            Main
                        </div>
                    </Link>
                </div>
            </>
        )
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const { users, user, error} = this.props;

        if(this.props.error !== null){
            toast.error(error.response.data.statusText, {
                position: toast.POSITION.TOP_RIGHT
            });
        }

/*        if(!!user && users.length <= 0){
            this.props.getAllUsers();
        }*/
    }
}

const mapStateToProps = (state) => ({
    user: state.userReducers.user,
    users: state.userReducers.users,
    error: state.userReducers.error
});

const mapDispatchToProps = dispatch => ({
    getAllUsers: () => dispatch(getAllUsers()),
    banUserById: (userId, isBanned) => dispatch(banUserById(userId, isBanned)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminList);
