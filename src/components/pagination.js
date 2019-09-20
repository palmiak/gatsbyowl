import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"

export default (props) => {
    return(
        <ul className="pagination">
            <li>
            {props.prev !== null &&
                <Link to={props.prev}>Nowsze wydanie</Link>
            }
            </li>

            <li>
            {props.next !== null &&
                <Link to={props.next}>Wcześniejsze wydanie</Link>
            }
            </li>
        </ul>
    )
}