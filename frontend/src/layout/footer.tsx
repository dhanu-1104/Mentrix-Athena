import React from "react";

import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import NewsLetter from "@/news-letter";

const useStyles = createStyles((theme) => ({
    footer: {
        marginBottom:rem(50),
        marginTop: rem(50),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

const FooterCentered = () => {
    const { classes } = useStyles();
    return (
        <footer>
            <NewsLetter />
            <hr />
          <div>
              <div>
                  <Container size={1250} className={classes.inner}>

                      <MantineLogo size={28} />
                      <Group spacing={0} className={classes.links} position="right" noWrap>
                          <ActionIcon size="lg">
                              <IconBrandTwitter size="1.05rem" stroke={1.5} />
                          </ActionIcon>
                          <ActionIcon size="lg">
                              <IconBrandYoutube size="1.05rem" stroke={1.5} />
                          </ActionIcon>
                          <ActionIcon size="lg">
                              <IconBrandInstagram size="1.05rem" stroke={1.5} />
                          </ActionIcon>
                      </Group>

                  </Container>

                  <Container className={classes.inner} size={1250} >
                      <div className="opacity-50">
                          &copy;2022 ABC. All rights reserved.
                      </div>
                      <Group spacing={0} className={classes.links} position="right" noWrap>
                          <div className="flex flex-row  space-x-8 font-light text-sm opacity-50">
                              <div>
                                  Terms
                              </div>
                              <div>
                                  About us
                              </div>
                              <div>
                                  Privacy policy
                              </div>
                          </div>
                      </Group>
                  </Container>
              </div>
          </div>
        </footer>
    )
}
export default FooterCentered;



