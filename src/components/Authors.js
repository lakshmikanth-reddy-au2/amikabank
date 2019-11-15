import React from "react";
import { getAuthoreAction } from "../actions/booksAction";
import { connect } from "react-redux";
import "./allComponents.css";

class Authors extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }
  render() {
    console.log(this.props.authors);

    return (
      <div className="container authors">
        {this.props.authors.authors ? (
          <div>
            {this.props.authors.authors.map((item, index) => (
              <a href={`/author/${item.id}`}>
                <div className="cards" key={index * 14}>
                  <div className="card author-card" key={index * 15}>
                    <img
                      className="card-img-top author-image"
                      src={item.author_image}
                      alt="Card"
                    />
                    <div className="card-body author-card-body">
                      <h6 className="card-title author-title">{item.name}</h6>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    authors: state.authors
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllBooks: function() {
      fetch("https://api.myjson.com/bins/1edbci")
        .then(result => result.json())
        .then(response => dispatch(getAuthoreAction(response)));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Authors);
