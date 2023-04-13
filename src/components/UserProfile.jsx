const UserProfile = (props) => {
  return (
    <div>
      <div>
        <img src={props.picture} />
        <div>
          <p>{props.id} </p>
          <p>{props.name} </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
