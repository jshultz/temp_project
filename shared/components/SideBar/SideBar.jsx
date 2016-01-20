import React, { Component , PropTypes }   from 'react';
import {Link} from 'react-router'

class SideBar extends Component {
    static propTypes = {
    };

    constructor () {
        super()
    }

    render() {
        return (
            <div className='alt_column'>
                <div className='side_box' style={{marginTop: 16}}>
                    <h2>Need Help?</h2>
                    <p>
                        <a className={'scrollTop' + ' ' + 'video_icon' + ' ' + 'openVideoDialog'}
                           data-ga='click|Help Videos|overview' data-id='null'
                           href='//files.masteryconnect.com/BS-CompleteOverview.m4v'>Getting Started Video</a><br />
                        <a className={'scrollTop' + ' ' + 'video_icon' + ' ' + 'openVideoDialog'}
                           data-ga='click|Help Videos|create-class' data-id='null'
                           href='//files.masteryconnect.com/BS-CreateClass.m4v'>Creating a Class</a><br />
                        <a className={'scrollTop' + ' ' + 'video_icon' + ' ' + 'openVideoDialog'}
                           data-ga='click|Help Videos|create-assignment' data-id='null'
                           href='//files.masteryconnect.com/BS-CreateAssignment.m4v'>Creating an Assignment</a><br />
                        <a href='/help'>More Help Videos...</a>
                    </p>
                </div>
                <div className='side_box'>
                    <h2>Recent Assignments</h2>
                    <ul className='side_teachers'>
                        <li style={{minHeight: 30}}>
                            <div className='poster'>
                                <a href='/classrooms/6154' style={{marginTop: 4, display: 'block'}}><img
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAQAAAAK9c1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUKM9jiPmPDTIgg5j/mABNEXYla5EVgZSsBWMYBCnZh6wIuyn3kBVhN+UesiJczkXyHTZT/oNNgUCoEnwAqymo5o2aQqkpBJUQggD9elIDNHCx4wAAAABJRU5ErkJggg=='/></a>
                            </div>
                            <div><a href='/classrooms/6154'>test rubric criteria</a></div>
                            <div>0/21 Students Scored</div>
                        </li>
                        <li style={{minHeight: 30}}>
                            <div className='poster'>
                                <a href='/classrooms/71561' style={{marginTop: 4, display: 'block'}}><img
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAQAAAAK9c1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUKM9jiPmPDTIgg5j/mABNEXYla5EVgZSsBWMYBCnZh6wIuyn3kBVhN+UesiJczkXyHTZT/oNNgUCoEnwAqymo5o2aQqkpBJUQggD9elIDNHCx4wAAAABJRU5ErkJggg=='/></a>
                            </div>
                            <div><a href='/classrooms/71561'>test rubric criteria</a></div>
                            <div>0/1 Students Scored</div>
                        </li>
                        <li style={{minHeight: 30}}>
                            <div className='poster'>
                                <a href='/classrooms/6154' style={{marginTop: 4, display: 'block'}}><img
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAQAAAAK9c1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUKM9jiPmPDTIgg5j/mABNEXYla5EVgZSsBWMYBCnZh6wIuyn3kBVhN+UesiJczkXyHTZT/oNNgUCoEnwAqymo5o2aQqkpBJUQggD9elIDNHCx4wAAAABJRU5ErkJggg=='/></a>
                            </div>
                            <div><a href='/classrooms/6154'>item check</a></div>
                            <div>0/21 Students Scored</div>
                        </li>
                        <li style={{minHeight: 30}}>
                            <div className='poster'>
                                <a href='/classrooms/6154' style={{marginTop: 4, display: 'block'}}><img
                                    src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAVCAQAAAAK9c1nAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE5JREFUKM9jiPmPDTIgg5j/mABNEXYla5EVgZSsBWMYBCnZh6wIuyn3kBVhN+UesiJczkXyHTZT/oNNgUCoEnwAqymo5o2aQqkpBJUQggD9elIDNHCx4wAAAABJRU5ErkJggg=='/></a>
                            </div>
                            <div><a href='/classrooms/6154'>Rubric Printing Test Assessment</a></div>
                            <div>3/21 Students Scored</div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default (SideBar)
