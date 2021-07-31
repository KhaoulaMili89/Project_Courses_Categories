import React , {useEffect} from 'react'
import {useSelector} from 'react-redux'
import CoursesCard from '../components/Courses/CoursesCard'
import {useDispatch} from 'react-redux'
import {get_Course} from '../actions/courseAction'
import AddCourseModal from '../components/Courses/AddCourseModal'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   
    marge :
    {
      display: 'flex',
      justifyContent:'space-around',
      margin: theme.spacing(3),
      padding: theme.spacing(2,6, 2),
      width: '120ch'

    }
    
  }));

const Courses = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( get_Course() );

    },[]);

    const courses = useSelector( (state) => state.courseReducer.courses)
    const user = useSelector(state => state.authReducer.user)

    const classes = useStyles();

    return (
<div>
<Grid container  >
            
            <h1 style={{ alignText:'center'}}>All Courses</h1>
            <AddCourseModal/> 
             <p className={classes.marge} style={{ display:'flex', alignContent:'center' ,flexWrap: 'wrap' }}>
           
{/*          {courses && courses.filter(el=>el.owner._id===user._id).map((course) => <CoursesCard key = {course._id} course = {course} />)} </p>
 */}             
          {courses && courses.filter(el=>el.owner._id===user._id).map((course) => <CoursesCard key = {course._id} course = {course} />)} </p>
 
              </Grid>
      </div>
    );
};

export default Courses;