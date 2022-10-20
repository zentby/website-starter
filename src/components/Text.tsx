import cx from "classnames";
import React from "react";

import { Component } from "react";

export class Text extends Component<
  {},
  { likes: number; dislikes: number; liked: boolean; disliked: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { likes: 100, dislikes: 25, liked: false, disliked: false };
  }

  render() {
    const { liked, disliked, likes, dislikes } = this.state;
    return (
      <>
        <div>
          <button
            className={cx("like-button", { liked })}
            onClick={() => {
              this.setState({
                ...this.state,
                disliked: false,
                dislikes: disliked ? dislikes - 1 : dislikes,
                liked: !liked,
                likes: liked ? likes - 1 : likes + 1,
              });
            }}
          >
            Like | <span className="likes-counter">{likes}</span>
          </button>
          <button
            className={cx("dislike-button", { disliked })}
            onClick={() => {
              this.setState({
                ...this.state,
                liked: false,
                likes: liked ? likes - 1 : likes,
                disliked: !disliked,
                dislikes: disliked ? dislikes - 1 : dislikes + 1,
              });
            }}
          >
            Dislike | <span className="dislikes-counter">{dislikes}</span>
          </button>
        </div>
        <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                    .likes-counter {

                    }
                    .dislikes-counter{

                    }
                `}</style>
      </>
    );
  }
}
