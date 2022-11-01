import { Component } from 'react'
import s from './Searchbar.module.css'
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
     // autocomplete="off"
      //autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>)
  }
}


export default Searchbar