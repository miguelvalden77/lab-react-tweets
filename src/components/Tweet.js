import Actions from "./Actions";
import Message from "./Message";
import Timestamp from "./Timestamp";
import User from "./User";
import ProfileImage from "./ProfileImage";

function Tweet({name, image, handle, message, timestamp}) {
  return (
    <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
          <User name={name} handle={handle}/>

          <Timestamp>{timestamp}</Timestamp>
        </div>

        <Message>{message}</Message>

        <Actions/>
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
