import PropTypes from 'prop-types';

export default function FriendListItem({ isOnline, avatar, name, id }) {
  return (
    <div key={id} class="item">
      <span class="status">{isOnline ? 'Yes' : 'No'}</span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  is: PropTypes.number,
};
