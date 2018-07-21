import React from "react";
import { Card, Icon, Image, Segment, Dimmer, Loader } from "semantic-ui-react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
const key = "224486a8a42d45c4abb51f9c1432199b";
const sources = `https://newsapi.org/v2/sources?apiKey=${key}`;
const dariSemantic = "https://react.semantic-ui.com";

class Sourcelist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    axios
      .get(sources)
      .then(result => {
        console.log(result, "ini sukses");
        this.setState({
          data: result.data.sources,
          loading: false
        });
      })
      .catch(error => {
        console.log(error.message, "ini error");
        this.setState({
          error: error.message,
          loading: false
        });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src={`${dariSemantic}/images/wireframe/short-paragraph.png`} />
        </Segment>
      );
    } else if (error) {
      return <Segment>{error}</Segment>;
    }

    return (
      <Card.Group>
        {data.map(source => {
          return (
            <Card key={source.id}>
              <Image src={`${dariSemantic}/images/avatar/large/matthew.png`} />
              <Card.Content>
                <Card.Header>{source.name}</Card.Header>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    );
  }
}
export default Sourcelist;
