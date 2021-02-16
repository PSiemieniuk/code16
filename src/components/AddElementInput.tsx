import * as React from 'react';
import {TextField} from "@material-ui/core";
import {FormEvent, useState} from "react";
import {ToDoElementType} from "../types/ToDoElementType";
import getNewUuid from "../utils/uuidGenerator";

type Props = {
    addNewElementToList: (element: ToDoElementType) => void;
};

export const AddElementInput = ({addNewElementToList}: Props) => {
    const [description, setDescription] = useState<string>("");

    const addNewElement = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(description) {
            const newElement: ToDoElementType = {
                id: getNewUuid(),
                description: description
            }
            setDescription("");
            addNewElementToList(newElement)
        }
    }

    return (
        <>
            <form data-testid="add-element-input_form" onSubmit={addNewElement}>
                <TextField
                    inputProps={{ "data-testid": "add-element-input_text-field" }}
                    label="Co nowego?"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button
                    style={{ display: "none" }}
                    type="submit"
                />
            </form>
        </>
    );
};

