import React, { Component } from 'react';
import styles from '../assets/css/search.css'

function Dropdown(props) {
    return (
            <div className={props.class}>
                <ul className={styles.dropdownList}>
                    <li className={styles.dropdownItemTop}>
                        <button className={styles.dropdownButton} onClick={function () {
                            props.onClick('Sell')
                        }}>Sell</button>
                    </li>
                    <li className={styles.dropdownItem}>
                        <button className={styles.dropdownButton} onClick={function () {
                            props.onClick('Rent')
                        }}>Rent</button>
                    </li>
                </ul>
            </div>
    )
}

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: 'Rent',
            filter: 'hidden',
        };
        this.onFilterClick = this.onFilterClick.bind(this);
        this.onFilterBtnClick = this.onFilterBtnClick.bind(this);
        this.getClasses = this.getClasses.bind(this);
    }

    onFilterClick(searchType) {
        this.setState({
            search: searchType,
            filter: 'hidden',
        })
    }

    onFilterBtnClick() {
        this.setState({
            search: this.state.search,
            filter: 'open',
        })

    }

    getClasses() {
        let filterClasses = [styles.dropdownContainer];
        if (this.state.filter === 'open') {
            let classIndex = filterClasses.indexOf(styles.hidden);
            if (classIndex > 0) {
                filterClasses.splice(classIndex, 1);
            }
        } else {
            filterClasses.push(styles.hidden)
        }
        return {
            filter: filterClasses.join(' ')
        }
    }

    render() {
        let filterClass = this.getClasses();
        return (
            <section className={styles.sectionStructure}>
                <div className={styles.contentBlock}>
                    <h2 className={styles.sectionHeader}>Search Alexandria.</h2>
                    <div className={styles.search}>
                        <div className={styles.searchBox}>
                            <Dropdown onClick={this.onFilterClick} class={filterClass.filter}/>
                            <button className={styles.searchFilterButton} onClick={this.onFilterBtnClick}>{this.state.search}</button>
                            <label className={styles.label}>Search box</label>
                            <input className={styles.searchInput} placeholder="Enter title, isbn or category" type="text"/>
                        </div>
                        <div className={styles.buttonContainer}>
                            <label className={styles.label}>Search button</label>
                            <a className={styles.searchButton} href="{% url 'search_page' %}">Search</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}