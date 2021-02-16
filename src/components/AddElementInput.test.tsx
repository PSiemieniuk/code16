import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'
import {AddElementInput} from "./AddElementInput";
import {ToDoElementType} from "../types/ToDoElementType";
import getNewUuid from '../utils/uuidGenerator';
import { mocked } from 'ts-jest/utils';

jest.mock('../utils/uuidGenerator')

describe('<AddElementInput />', () => {
    const testUuid = "9d815a59-b146-4288-a605-b44c708d4b1c";
    const mockedGetNewUuid = mocked(getNewUuid, true);
    mockedGetNewUuid.mockImplementation(() => testUuid);

    const renderComponent = (addNewElementFunc: (element: ToDoElementType) => void) => {
        render(<AddElementInput addNewElementToList={addNewElementFunc} />)
    }

    it(`#Code16Challenge Test!`, () => {
        const addNewElementFunc = jest.fn();
        renderComponent(addNewElementFunc);

        const textToTest = "Zrobić kolację dla mojej dziewczyny."

        const textInput = screen.getByTestId("add-element-input_text-field") as HTMLInputElement;
        const form = screen.getByTestId("add-element-input_form") as HTMLFormElement;

        // Sprawdzenie czy na początku pole do wpisywania jest puste
        expect(textInput.value).toEqual("");

        // Wywołanie submita na formularzu
        fireEvent.submit(form);

        // Sprawdzenie czy funkcja z propsów nie uruchamia się gdy pole nie zostało wypełnione
        expect(addNewElementFunc).not.toBeCalled();

        // Zasymulowanie zmiany wartości w inpucie
        fireEvent.change(textInput, { target: {value: textToTest}});

        // Sprawdzenie czy wartośc się zmieniła
        expect(textInput.value).toEqual(textToTest);

        // Wywołanie submita na formularzu
        fireEvent.submit(form);

        // Sprawdzenie czy funkcja z propsów na dodanie została wywałana tylko 1 raz
        expect(addNewElementFunc).toBeCalledTimes(1);

        // Sprawdzenie czy funkcja z propsów na dodanie została wywołana z odpowiednimi wartościami
        expect(addNewElementFunc).toBeCalledWith({id: testUuid, description: textToTest})

        // Sprawdzenie czy input został wyczyszczony
        expect(textInput.value).toEqual("");
    });
});