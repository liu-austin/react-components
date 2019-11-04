// jshint esversion:6

// TODO

var TodoList = (props) => {
    return (
        <ul>
        {
            props.todos.map((todo, i) => {
                return (
                    <TodoListItem todo={todo} key={i}/>
                );
            })
        }
        </ul>
    );
  };
  
  var App = () => (
    <div>
      <h2>My Todo List</h2>
      <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> 
    </div>
  );

  const GroceryList = (props) => {
    return (
        <ul>
        {
            props.items.map((item, i) => {
                return (
                    <GroceryListItem key={i} item={item} />
                );
            })
        }
        </ul>
    );
  };

  const Milk = () => {
    return (
        <li>Milk</li>
    )
  };

  const Oranges = () => {
    return (
        <li>Oranges</li>
    )
  };

//   const GroceryListItem = (props) => {
//       return (
//           <li>{props.item}</li>
//       );
//   }

  class GroceryListItem extends React.Component {
      constructor(props) {
          super(props);
      }

      render() {
          return (
            <li>{this.props.item}</li>
          );
      }

  }

  class TodoListItem extends React.Component {
    constructor(props) {
      super(props);
  
      // `state` is just an object literal
      this.state = {
        done: false,
        hover: false
      };
    }
  
    // When a list item is clicked, we will toggle the `done`
    // boolean, and our component's `render` method will run again
    onListItemClick() {
      this.setState({
        done: !this.state.done
      });
    }

    onListItemEnter() {
        this.setState({
            hover: true
        })
    }

    onListItemLeave() {
        this.setState({
            hover: false
        })
    }
  
    render() {
      // Making the style conditional on our `state` lets us
      // update it based on user interactions.
      var style = {
        textDecoration: this.state.done ? 'line-through' : 'none',
        fontWeight: this.state.hover ? 'bold' : 'normal'
      };
  
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      return (
        <li style={style} onMouseEnter={this.onListItemEnter.bind(this)} onMouseLeave={this.onListItemLeave.bind(this)} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
      );
    }
  }

ReactDOM.render(<App/>, document.getElementById('app'));

                // <GroceryList items={['Milk', 'Oranges', 'Cheese', 'Apples', 'Fish', 'Noodles', 'Soda']}/>
