import React from 'react';
import {fireEvent, render} from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard'
import Navbar from '../components/Navbar';
import Vote from '../components/Vote';
import {store} from '../index'
import Login from '../components/Login';



describe('Testing DOM elements', () => {
    it('will check presence of element', () => {
    const component =  render(
        <MemoryRouter>
            <Provider store={store}>
                <Leaderboard />
            </Provider>
         </MemoryRouter>
        );
        const column = component.getByTestId('answered')
        expect(column).toBeInTheDocument()
    })

    it('will create create snapshot', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Leaderboard />
                </Provider>
             </MemoryRouter>
            );
            expect(component).toMatchSnapshot();
        })

    it('Test Navbar', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
             </MemoryRouter>
        );
        
        const nav1 = component.getByTestId('home')
        expect(nav1).toBeInTheDocument()

        const nav2 = component.getByTestId('leaderboard')
        expect(nav2).toBeInTheDocument()

        const nav3 = component.getByTestId('new')
        expect(nav3).toBeInTheDocument()

        const img = component.getByTestId('logout')
        expect(img).toBeInTheDocument()
    })

    it('Test Login, login button is not present', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
             </MemoryRouter>
        ); 
        const drop = component.getByTestId('dropdown')
        expect(drop).toBeInTheDocument()


        const login = component.queryAllByTestId('login')
        expect(login.length).toEqual(0)    
    })

    it('testing fireEvent on Login, login button is present', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
             </MemoryRouter>
        ); 
        const drop = component.getByTestId('dropdown')
        fireEvent.change(drop, {target : {value: 'tylermcginnis'}});
        const login = component.getByTestId('login')
        expect(login).toBeInTheDocument()
    })

    it('testing 404 on vote when no qid is present', () => {
        const component =  render(
            <MemoryRouter>
                <Provider store={store}>
                    <Vote />
                </Provider>
             </MemoryRouter>
        ); 
        const err = component.getByTestId('404')
        expect(err).toBeInTheDocument()
    })
});