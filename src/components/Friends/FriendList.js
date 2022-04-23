import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './Friend.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li key={id} className={s.friendItem}>
          <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
