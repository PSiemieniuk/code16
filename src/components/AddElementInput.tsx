import * as React from 'react';
import {TextField} from "@material-ui/core";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {ToDoElementType} from "../types/ToDoElementType";

type Props = {
    addNewElementToList: (element: ToDoElementType) => void;
};

export const AddElementInput = ({addNewElementToList}: Props) => {
    const [description, setDescription] = useState<string>("");

    const addNewElement = () => {
        if(description) {
            const newElement: ToDoElementType = {
                id: uuidv4(),
                description: description
            }
            setDescription("");
            addNewElementToList(newElement)
        }
    }

    return (
        <>
            <form>
                <TextField
                    label="Co nowego?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                    style={{ display: "none" }}
                    type="submit"
                    onClick={e => {
                        e.preventDefault();
                        addNewElement();
                    }}
                />
            </form>
        </>
    );
};

