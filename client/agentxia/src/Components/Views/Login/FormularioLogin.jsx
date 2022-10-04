import React from 'react';
import './FormularioLogin.css';
import { Form, Button } from 'react-bootstrap';

const FormularioLogin = () => {
    return (
        <div className='cont-formulario-login'>
            <div className='cont-h4'><h4 className='login-formulario-h4'>Create your Free Account</h4></div>
            
                <Form className='form-cont'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='label-form-login'>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  className='input-login'/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='label-form-login'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  className='input-login'/>
                    </Form.Group>
                    <Form.Group className="mb-3 group-checkLink" controlId="formBasicCheckbox">
                        <Form.Check className='label-form-login remember' type="checkbox" label="Remember me" />
                        <Form.Label className='label-form-login link-form-login'>Already have a account? Log in</Form.Label>
                    </Form.Group>
                    <Button variant="primary" type="submit" className='btn-login-form'>
                        Create Account
                    </Button>
                    <Form.Label className='label-form-login label-down'>Don’t have a account? Sign Up</Form.Label>
                    <h5 className='label-form-login login-h5'>- OR -</h5>
                </Form>
            
        </div>
    )
}

export { FormularioLogin }