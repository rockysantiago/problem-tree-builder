import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { searchProblems } from 'actions/problemActions';
import SearchBar from 'components/SearchBar';

import {
  Wrapper,
  Container,
  Logo,
  Center,
  Background,
  Image,
  Heading,
  Link
} from './style';

class Home extends Component {
  state = {
    keyword: ''
  };

  /**
   * Manages the modification of the keyword within the search field.
   *
   * @param {string} keyword
   * String value of the text field
   */
  handleChange = keyword => this.setState({ keyword });

  /**
   * Triggers the search using the keyword and navigates
   * to the next page.
   */
  handleSearch = () => {
    const { keyword } = this.state;
    this.props.searchProblems(keyword);
    navigate('/compose');
  };

  render() {
    const { keyword } = this.state;

    return (
      <Wrapper>
        <Container>
          <Logo src={`${process.env.PUBLIC_URL}/adb_logo_outline.png`} />

          <Center active={keyword !== ''}>
            <Background>
              {keyword === '' && (
                <Image src={`${process.env.PUBLIC_URL}/bg-img.jpg`} />
              )}
            </Background>

            <Heading>Start building your tree</Heading>

            <SearchBar
              onSearch={this.handleSearch}
              onChange={this.handleChange}
              size="huge"
              active={keyword !== ''}
              width="45%"
            />
          </Center>

          <Link>Help</Link>
        </Container>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ searchProblems }, dispatch);

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
