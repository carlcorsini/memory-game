import React from 'react'
import { Transition, Icon, Grid } from 'semantic-ui-react'

class Card extends React.Component {
  state = {
    animation: 'pulse',
    duration: 500,
    visible: true,
    name: 'question',
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible, name: this.props.name })
    this.props.isMatch(this.props.name)

    if (this.props.failed.includes(this.props.name)) {
      console.log('yeeee')
      this.setState({ name: 'question' })
    }
  }

  render() {
    const { animation, duration, visible, name } = this.state

    return (
      <Transition animation={animation} duration={duration} visible={visible}>
        <div
          value={name}
          onClick={this.toggleVisibility}
          style={{
            width: '5em',
            height: '5em',
            borderColor: this.props.success.includes(name) ? 'green' : 'black',
            border: 'solid .2em',
            margin: '1em',
          }}>
          <Grid>
            <Grid.Row />
            <Grid.Row columns="equal">
              <Grid.Column />
              <Grid.Column textAlign="center">
                <Icon name={name} />
              </Grid.Column>
              <Grid.Column />
            </Grid.Row>
            <Grid.Row />
          </Grid>
        </div>
      </Transition>
    )
  }
}

export default Card
