import React from "react";
import { getBookDetailAction } from "../actions/booksAction";
import { connect } from "react-redux";
class OneBook extends React.Component {
  componentDidMount() {
    let id = window.location.href.slice(
      window.location.href.lastIndexOf("/") + 1,
      100
    );
    this.props.getBookDetails(id);
  }
  render() {
    return (
      <div className=" container OneBook" style={{ marginTop: "50px" }}>
        {this.props.book ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              fontFamily: "Belleza",
              borderStyle: "outset",
              padding: "0 20px 0 0"
            }}
          >
            <img
              src={this.props.book.image}
              alt={this.props.book.image}
              style={{
                marginRight: "50px",
                minWidth: "300px",
                maxHeight: "400px"
              }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  textAlign: "left",
                  flexGrow: "1",
                  display: "flex",
                  marginTop: "20px",
                  maxHeight: "100px"
                }}
              >
                <div class="col-md-6" style={{ marginRight: "20px" }}>
                  <h6>
                    <strong>Title: </strong> {this.props.book.book}
                  </h6>
                  <h6>
                    <strong>Author: </strong> {this.props.book.author}
                  </h6>
                </div>
                <div class="col-md-6" style={{ flexGrow: "1" }}>
                  <h6>
                    <strong>Total pages:</strong> {this.props.book.total_pages}
                  </h6>
                  <h6>
                    <strong>Read % :</strong>{" "}
                    {parseInt(
                      (this.props.book.pages_read /
                        this.props.book.total_pages) *
                        100,
                      10
                    )}{" "}
                    %
                  </h6>
                </div>
              </div>
              <h6
                style={{
                  textAlign: "justify"
                }}
              >
                <strong>Description : </strong>
                {this.props.book.description}
              </h6>
            </div>
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
    book: state.oneBook[0]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getBookDetails: function(id) {
      fetch("https://api.myjson.com/bins/xu6yq")
        .then(result => result.json())
        .then(response => {
          console.log(response);
          let book = response.books.filter(data => data.id === id);
          console.log(book);
          dispatch(getBookDetailAction(book));
        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneBook);
