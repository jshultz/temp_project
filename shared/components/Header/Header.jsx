import React, { Component , PropTypes }   from 'react';

class Header extends Component {
    static propTypes = {
    };

    render() {
        return (
            <div className='nav_header'>
                <div id='nav_header_inner' className='nav_header_inner'>
                    <ul className='main_nav'>
                        <li className='home'>
                            <Link className='logo' to='/'>
                                <img
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAiCAYAAAA+stv/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowQTgwMTE3NDA3MjA2ODExOEMxNEExQjM0QzM0NTA1RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQTFGQTMxMjc0NTUxMUUyQTNCQUU4RUNGRjFDNDcwNiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzk3QjNERTcyQzYxMUUyQTNCQUU4RUNGRjFDNDcwNiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjQ1NEEwOUYxRjIwNjgxMTgyMkFEQ0JDRjU1RDQyMjciIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MEE4MDExNzQwNzIwNjgxMThDMTRBMUIzNEMzNDUwNUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz51QOxMAAAElUlEQVR42sRYbUibVxTWmKhRMqM2GrVKURoblw0/IlKxLRQVf1hhjjL1x2bwh2VVKNuPgZ0pDGbpFGUSZgttpcztTwv9+NFWxzYpdVjYQMUv4gd+lFSLsbTVLho1e05470v6mrx5Y2ReeHjP/Tr3ufeec+5JQl0uV8hBltC9ElAoFL6VhoZmAF8AeagagH+xziDwK9BHY5xOp3cC4eHhenw+BF6ibwwD7YEQkMlkJuC7MBQQIDLudlpne3ub8Ajy+c3NTcd7BLAwsf4Bk4+zSTs7Ow70X9nY2LgmhQDmfiaXyzuwNskhQgLQ5yYBuXd9fd3EE8Diaih8gkmH2ESOgHvC1tYWkfhRjADmqJVK5TOIKk8dwkI6oY+uoBY6+2TUGB0d/S0tDvYhjD2BZGoDwa8jIiLSxGwiLi7uLDYjujh3Sm69CQkJX7rr3G7KqVE4kepcuzw5OfkTEaMjhaf9Le5JAjZg4AmgovLHOjU19ZgYARBNkLI4G4/jV/IE4uPj3/mbDALvxPpJRyBuHBMT4+AJlJaWTvqLBzCeVbH+nJyciUAIGAwGG0+gpaXlml6vXxGbMDMzk+Srj8ibzebbiYmJbyVegau+vv4BTyA2NvZxf3//LZPJNBEVFeX0dmfz8/Mn4QkKXwRUKtU/FovlcWRkpFNscRrb0NAwUlFR8TPfwEEGlAGtVqv1JgyzC/JPCwsL17u6uu6lpKRMwV3b2HhyT09QXEB78tDQ0NXCwsIRbMomRHp6+mxPT88djDvF9Ph6C9TAG7p6CizA0aWlperi4uK8qampp7Bgs7dISCcF4vEQP+/u7j4xPDwcMzc3p4KBOnDnr6urqye1Wm03TnIcOgJ+jJSrq6v1RUVFZ2APAzBKsy8XI7d1OBwfo3oYSOQ28xwYQVCjh8n3Y+TvEQSJ8xyJQZC4KObrnq7NjpwVRsDTBqRCYbfbL8BrfsduvhfaglTwhPZAYF9IBEsgaBJBE+DczpPE5f+VgIfvu0lkZWX9Afe6irYPAiEQdE7I+b7bO7Kzs2tXVlZcSGIeQu8E138E8iLEP/Fd2A8v2BUJ2Ul0dnbeQEi2IWLaENLfA0L0Iq7pEsaH+TwBDKA3/RJwHO0vgOvY3V0pSSmdxOjoqLGgoOC+t/hCdUrF8O3A7lt3BSIsrsAd/oa6jgUQLos9h7D5QEpSCqUKjUYzizlhvvJB9G1hU0bofMm/hlRwdEX46IRHq1arv5FqFzhmJZSHiWVWlN6lpaWd5tuYkJub+xFLRlkYJRlFK5VASUmJWko+CLc9vItAXV3dLHa8I5yQn5//QiqBtra2tzBAp79x0GnbRaCqquqvxsbGIcpWWFtGRsar9vb2X6QSyMzMfF1WVmYVc22MsTc3Nz9ldia01hPj4+Om3t5eTVJSkqOysvJvGKcF7esSfxmFLC8vf1peXm6GHo2wn7It5Ak9yEEvMs/w5uNxQAGg57Ikv3FAEOHka2trXzU1NfUZjcYxeMVznU5nrampGZienragX+vpmvv+65iLjHKIp4A8Lil5BVBkfIgTfcNiQFAEDvz/gf0q/wkwAMqXp2BwERzoAAAAAElFTkSuQmCC'/>
                            </Link>
                        </li>
                        <li className={assignments ? '' : 'selected'}><Link to='/classrooms'><span>Classrooms</span></Link></li>
                        <li className={assignments ? 'selected' : ''}><Link to='/assignments'><span>Assignments</span></Link></li>
                    </ul>
                    <div id='session_widget' className='session_widget'>
                        <div className='session_bar_menu'><Launchpad /></div>
                        <div className='session_bar_menu'><UserMenu /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default (Header)
