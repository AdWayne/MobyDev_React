import React, { useState, useCallback, useMemo } from 'react';
import UserCard from './components/UserCard';
import FilterButtons from './components/UserCard';


const initialUsers = [
  { id: 1, name: 'Ақжол Серікұлы', email: 'akzhol@example.com', role: 'Frontend Dev', isFavorite: false },
  { id: 2, name: 'Арайлым Нұрланқызы', email: 'araylym@example.com', role: 'UI/UX Designer', isFavorite: false },
  { id: 3, name: 'Бекжан Ерболатұлы', email: 'bekzhan@example.com', role: 'Backend Dev', isFavorite: false },
  { id: 4, name: 'Дильназ Қайратқызы', email: 'dilnaz@example.com', role: 'QA Engineer', isFavorite: false },
  { id: 5, name: 'Ернар Мұратұлы', email: 'ernar@example.com', role: 'Project Manager', isFavorite: false },
  { id: 6, name: 'Жансая Бақытжанқызы', email: 'zhansaya@example.com', role: 'DevOps Engineer', isFavorite: false },
  { id: 7, name: 'Мадияр Сәкенұлы', email: 'madiyar@example.com', role: 'Fullstack Dev', isFavorite: false },
  { id: 8, name: 'Мәдина Серікқызы', email: 'madina@example.com', role: 'HR Manager', isFavorite: false },
  { id: 9, name: 'Нұрсұлтан Қанатұлы', email: 'nursultan@example.com', role: 'Data Scientist', isFavorite: false },
  { id: 10, name: 'Тоғжан Асқарқызы', email: 'togzhan@example.com', role: 'Product Owner', isFavorite: false },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [filter, setFilter] = useState('all');

  const handleToggleFavorite = useCallback((userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, isFavorite: !user.isFavorite } : user
      )
    );
  }, []);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const filteredUsers = useMemo(() => {
    console.log('--- Вычисление отфильтрованного списка (useMemo) ---');
    const safeUsers = users.filter(Boolean);

    if (filter === 'favorites') {
      return safeUsers.filter((user) => user.isFavorite);
    }
    return safeUsers;
  }, [users, filter]);

  return (
    <div style={styles.appContainer}>
      <h2>Список пользователей с фильтрацией</h2>
      
      <FilterButtons 
        currentFilter={filter} 
        onFilterChange={handleFilterChange} 
      />

      <div style={styles.list}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => {
            if (!user) return null;
            return (
              <UserCard
                key={user.id}
                user={user}
                onToggleFavorite={handleToggleFavorite}
              />
            );
          })
        ) : (
          <p style={styles.emptyText}>Избранных пользователей пока нет</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
  },
  list: { marginTop: '10px' },
  emptyText: { color: '#888', fontStyle: 'italic' }
};

export default App;