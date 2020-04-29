import React from 'react';

import Form from '../Common/Form';
import TextInput from '../Common/TextInput';

const NewProject = () => {
  return (
    <div className='add-project'>
      <h2 className='recent-title'>add new project</h2>
      <Form>
        <TextInput
          name='project_name'
          label='project name'
          value=''
          onChange={() => {}}
          error='error'
        />
        <button className='btn'>Add</button>
      </Form>
    </div>
  );
};

export default NewProject;
