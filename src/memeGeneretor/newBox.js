import React from "react";
export default function NewBox(props) {
  // const [on, setOn] = React.useState(props.on);
  // console.log(props);
  const styles = {
    backgroundColor: props.on ? "indigo" : "orange",
  };

  return (
    <div className="box" style={styles} onClick={props.toggle}>
      {/* {props.on} */}
    </div>
  );
}
