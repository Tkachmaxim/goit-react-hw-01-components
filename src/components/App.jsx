import user from "data/user.json"
import data from "data/data.json"
import friends from "data/friends.json"
import transaction from "data/transactions.json"
import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/Friends/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction}/>
    </div>
  );
};


