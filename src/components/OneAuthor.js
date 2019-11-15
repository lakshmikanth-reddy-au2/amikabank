import React from "react";
import { getAuthorDetailAction } from "../actions/booksAction";
import { connect } from "react-redux";
class OneAuthor extends React.Component {
  componentDidMount() {
    let id = window.location.href.slice(
      window.location.href.lastIndexOf("/") + 1,
      100
    );
    this.props.getBookDetails(id);
  }
  render() {
    let data = this.props.author;
    console.log("render", data);
    return (
      <div className=" container OneAuthor" style={{ marginTop: "50px" }}>
        {data ? (
          <div>
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
                src={data.author_image}
                alt={data.author_image}
                style={{
                  marginRight: "50px",
                  minWidth: "250px",
                  maxHeight: "400px"
                }}
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    textAlign: "left",
                    display: "flex",
                    marginTop: "20px",
                    maxHeight: "100px"
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <h2>
                      <strong>{data.name}</strong>
                    </h2>
                  </div>
                </div>
                <h6
                  style={{
                    textAlign: "justify"
                  }}
                >
                  <strong>Description : </strong>
                  {data.story}
                </h6>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h3 style={{ textAlign: "justify", color: "blue" }}>Books:</h3>
              {data.books.map((item, index) => (
                <a href={`/books/${item.id}`}>
                  <div className="cards" key={index * 12}>
                    <div className="card book-card" key={index * 13}>
                      <img
                        className="card-img-top book-image"
                        src={item.image}
                        alt="Card"
                      />
                      <div className="card-body">
                        <h5 className="card-title book-title">{item.book}</h5>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
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
  console.log("state = ", state);
  return {
    author: state.oneAuthor[0]
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getBookDetails: function(id) {
      fetch("https://api.myjson.com/bins/1edbci")
        .then(result => result.json())
        .then(response => {
          console.log(response);
          let author = response.authors.filter(data => data.id === id);
          console.log(author);
          dispatch(getAuthorDetailAction(author));
        });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OneAuthor);
