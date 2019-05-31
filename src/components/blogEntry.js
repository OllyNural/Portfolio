import React from "react";
import { Link } from "gatsby"
import { withStyles } from "@material-ui/styles";

const styles = theme => ({

})

function BlogEntry(props) {
  return (
    <div>
      <Link to={props.slug}>
        {props.title}
      </Link>
      <small>{props.date}</small>
      <p
        dangerouslySetInnerHTML={{
          __html: props.description || props.excerpt,
        }}
      />
    </div>
  )
}

export default withStyles(styles)(BlogEntry)