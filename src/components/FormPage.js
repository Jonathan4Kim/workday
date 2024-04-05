import React from 'react';
import Example from '../Form'; // Assuming form.js is in the same directory

function FormPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-8">User Profile Form</h1>
      <Example />
    </div>
  );
}

export default FormPage;
