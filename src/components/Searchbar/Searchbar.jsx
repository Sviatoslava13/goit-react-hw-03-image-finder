import { Component } from 'react'
import s from './Searchbar.module.css'
import PropTypes from 'prop-types';
class Searchbar extends Component{
  state = {
    input:''
  }
  handleChange = e => {
  this.setState({input: e.target.value})
}
    handleSubmit = e => {
      e.preventDefault()
      this.props.searchQuery(this.state.input)
    //   this.setState({ input: ''});
  }
  render() {
  return  (<header className={s.searchbar}>
  <form className={s.form} onSubmit={this.handleSubmit}>
    <button type="submit" className={s.button}>
      <span className={s.buttonLabel}>Search</span>
    </button>

    <input
        className={s.input}
        onChange={this.handleChange}
        value={this.state.input}
      type="text"
   autoComplete="off"
   autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>)
  }
}
Searchbar.propTypes = {
  searchQuery: PropTypes.func.isRequired
}

export default Searchbar