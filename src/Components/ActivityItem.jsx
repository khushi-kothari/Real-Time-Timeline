import React, {Component} from "react";
import moment from "moment";

class ActivityItem extends Component {
  render() {
    const { activity } = this.props; // ES6 destructuring

    return (
      <div className="item">
        <div className={"avatar"}>
          <img alt="avatar" src={activity.actor.avatar_url} />
        </div>

        <span className={"time"}>
          {moment(activity.created_at).fromNow()}
        </span>

        <p>
          {activity.actor.display_login} {activity.payload.action}
        </p>
        <div className={"right"}>{activity.repo.name}</div>
      </div>
    );
  }
}
 
export default ActivityItem;