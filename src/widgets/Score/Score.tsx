import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { CurrentScore, PreviousScore } from 'widgets';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Container>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const Score: FC = () => {
  const { t } = useTranslation(['leaderboard']);
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant='fullWidth'>
          <Tab label={t('Current leaderboard')} {...a11yProps(0)} />
          <Tab label={t('Previous results')} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <CurrentScore />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PreviousScore />
      </TabPanel>
    </Box>
  );
};
