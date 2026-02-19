import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const projects = [
  { label: 'Project 1', href: 'https://yeji21803-cmyk.github.io/yejiZip' },
  { label: 'Project 2', href: 'https://yeji21803-cmyk.github.io/yejiZip' },
  { label: 'Project 3', href: 'https://yeji21803-cmyk.github.io/yejiZip' },
];

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e5dbff',
      py: { xs: 2, md: 4 },
    }}>
      <Box sx={{
        backgroundColor: 'white',
        borderRadius: 4,
        px: { xs: 3, md: 5 },
        py: { xs: 4.5, md: 6 },
        maxWidth: 520,
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
      }}>
        <Typography sx={{ fontSize: '4rem', mb: 2 }}>🙋</Typography>

        <Typography variant='h4' sx={{ fontWeight: 700, color: '#333', mb: 1 }}>
          안녕하세요!
        </Typography>

        <Typography sx={{ color: 'primary.main', fontWeight: 600, fontSize: '1.1rem', mb: 2.5 }}>
          xillydi (옞이)입니다
        </Typography>

        <Typography sx={{ color: '#666', lineHeight: 1.7, fontSize: '0.95rem', mb: 3.5 }}>
          사용자 경험과 코드 품질을 최우선 작업합니다.
        </Typography>

        <Button
          variant='contained'
          href='https://github.com/yeji21803-cmyk'
          target='_blank'
          sx={{ backgroundColor: '#e5dbff', color: '#5c2d9e', mb: 4, '&:hover': { backgroundColor: '#d0c4f7' } }}
        >
          GitHub
        </Button>

        <Typography sx={{ color: '#aaa', fontSize: '0.8rem', mb: 1.5 }}>
          Projects
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5} justifyContent='center'>
          {projects.map((project) => (
            <Button
              key={project.label}
              variant='outlined'
              href={project.href}
              target='_blank'
              color='primary'
            >
              {project.label}
            </Button>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default App;
