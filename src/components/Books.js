import React from "react";
import { getBooksAction } from "../actions/booksAction";
import { connect } from "react-redux";
import "./allComponents.css";

class Books extends React.Component {
  componentDidMount() {
    this.props.getAllBooks();
  }
  render() {
    console.log(this.props.books.books);

    return (
      <div className="container Books">
        {this.props.books.books ? (
          <div>
            {this.props.books.books.map((item, index) => (
              <a href={`/books/${item.id}`}>
                <div className="cards" key={index * 12}>
                  <div className="card book-card" key={index * 13}>
                    <img
                      className="card-img-top book-image"
                      src={item.image}
                      alt="Card"
                    />
                    <div className="card-body">
                      <h6 className="card-title book-title">{item.book}</h6>
                      <span>
                        <p className="per">
                          {parseInt(
                            (item.pages_read / item.total_pages) * 100,
                            10
                          )}
                          %
                        </p>
                      </span>
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
    books: state.books
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllBooks: function() {
      fetch("https://api.myjson.com/bins/xu6yq")
        .then(result => result.json())
        .then(response => dispatch(getBooksAction(response)));
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Books);
