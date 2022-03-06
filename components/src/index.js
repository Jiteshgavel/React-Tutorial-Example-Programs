import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

import faker from "@faker-js/faker";
// import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">

        <ApprovalCard>
            <div>
                <h4>Warning !</h4>
                  Are you sure you want to do this ? 
            </div>
           
        </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="jitesh"
          timeAgo="Today at 4:60 PM"
          comment="Ek no post h"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="pankaj"
          timeAgo="Today at 7:00 PM"
          comment="Post ho to aisa"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="narendra"
          timeAgo="Today at 9:30 PM"
          comment="Kuch bhi likh deta h be post me"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails
          avatar={faker.image.avatar()}
          author="sanket"
          timeAgo="Today at 8:60 PM"
          comment="Kya blog kare ga re tu"
        />
      </ApprovalCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
