import user from "../user.json"
import data from "../data.json"
import friends from "../friends.json"
import transaction from "../transactions.json"
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

export const App = () => {
  return (
    <div>
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </div>
  );
};
