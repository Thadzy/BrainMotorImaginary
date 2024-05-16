import { useContext } from 'react';
import UserContext from './UserContext';

function QuestionnaireList() {
  const [user, setUser] = useContext(UserContext);

  if (user) {
    return (
      <div>
        <h2>Welcome, {user && user.name}!</h2>
        {user && user.role === 'teacher' ? (
          <p>Here are some questions for teachers...</p>
        ) : (
          <p>Here are some questions for students...</p>
        )}
      </div>
    );
  } else {
    return <p>Please sign in to see the questions.</p>;
  }
}

export default QuestionnaireList;