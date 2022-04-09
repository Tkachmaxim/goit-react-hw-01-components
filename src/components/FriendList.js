import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li key={id}>
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
