import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friend.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li key={id} className={s.friendItem}>
          <FriendListItem
            isOnline={isOnline}
            avatar={avatar}
            name={name}
            id={id}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
