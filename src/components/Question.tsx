import React, { useState } from 'react';
import { propType } from './../types/type';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main_div: {
        width: '50%',
        margin: '0 auto'
    },
    paper: {
        padding: theme.spacing(3)
    }
}))

const Question: React.FC<propType> = ({ question, option, callback, currentQuestion }) => {
    const classes = useStyles();
    const [userSelect, setUserSelect] = useState("");

    const handleState = (e: any) => {
        setUserSelect(e.target.value);
    }

    return (
        <React.Fragment>
            <div className={classes.main_div}>
                <Paper elevation={3} className={classes.paper}>
                    <div>
                        Question  {currentQuestion}: {question}
                    </div>
                    <br />
                    <div>
                        <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, userSelect)}>
                            {option?.map((eachOption: string, index: number) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div>
                                            <label>
                                                <input type="radio" name="option" value={eachOption} required checked={userSelect === eachOption} onChange={handleState} />
                                                {eachOption}
                                            </label>
                                        </div>
                                    </React.Fragment>
                                )
                            })}
                            <br />
                            <input type="submit" />
                        </form>
                    </div>
                </Paper>
            </div>
        </React.Fragment>
    )
}

export default Question;