import React, {Component} from "react";
import ActivityItem from "./ActivityItem";
import {data} from '../data';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      loading: false // <~ set loading to false
    };
  }

  componentWillMount() {
    this.updateData();
  }

  // Call out to github data and refresh directory
  updateData() {
    this.setState(
      {
        loading: false,
        activities: data.sort(() => 0.5 - Math.random()).slice(0, 4)
      },
      this.props.onComponentRefresh
    );
  }

  componentWillReceiveProps(nextProps) {
    // Check to see if the requestRefresh prop has changed
    if (nextProps.requestRefresh === true) {
      this.setState({ loading: true }, this.updateData);
    }
  }

  render() {
    const { loading, activities } = this.state; // ES6 destructuring

    return (
      <div className="content">
        <div className="line" />
        {/* Show loading message if loading */}
        {loading && <div>Loading</div>}
        {/* Timeline item */}
        {activities.map(activity => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    );
  }
}

 
export default Content;