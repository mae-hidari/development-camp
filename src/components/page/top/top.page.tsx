import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { memo } from 'react';

import { BaseLayout } from '@/components/ui';
import { useAppStore } from '@/share/store';
import { useFetchUser } from '@/share/usecase/user';

const TopPage: NextPage = memo(() => {
  useFetchUser('mock-id');
  const user = useAppStore((state) => state.user);

  return (
    <BaseLayout
      footer={<Box>フッター</Box>}
      header={<Box>ヘッダー</Box>}
      mx="0"
      px="0"
    >
      ユーザー名：
      {user?.name}
    </BaseLayout>
  );
});

TopPage.displayName = 'TopPage';

export default TopPage;
