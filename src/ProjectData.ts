interface TaskData {
  /**
   * Unique ID
   */
  id: number;

  /**
   * Description of task
   */
  label: string;

  /**
   * Person task is assigned to
   */
  user: string;

  /**
   * ID of the parents project
   */
  parentId: number;

  /**
   * Start data of project
   */
  start: number;

  /**
   * Duration of project
   */
  duration: number;

  /**
   * Percent of where task starts
   */
  percent: number;

  /**
   * Either whole porject or milestone
   */
  type: string;

  /**
   * Start out being collapsed (true) or expanded (false)
   */
  collapsed: boolean;

  /**
   * Style of progress bar
   */
  style: {
    base: {
      fill: string, // Will be background color (#000000)
      stroke: string, // Will be stripe color (#000000)
    };
  };
}

export function DefaultProjectData(): ({ duration: number; collapsed: boolean; start: number; style: { base: { fill: null; stroke: null } }; id: number; label: string; type: string; user: string; percent: number } | { duration: number; collapsed: boolean; start: number; style: { base: { fill: string; stroke: string } }; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; start: number; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; dependentOn: number[]; start: any; id: number; label: string; type: string; user: string; percent: number } | { duration: number; start: any; style: { base: { fill: string; stroke: string } }; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; collapsed: boolean; start: any; style: { base: { fill: string; stroke: string } }; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; dependentOn: number[]; collapsed: boolean; start: any; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; dependentOn: number[]; start: any; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; dependentOn: number[]; start: any; style: { base: { fill: string; stroke: string } }; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number; parentId: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number } | { duration: number; start: any; id: number; label: string; type: string; user: string; percent: number })[] {


  return [
    {
      id: 1,
      label: 'Make some noise',
      user:
        '<a href="https://www.google.com/search?q=John+Doe" target="_blank" style="color:#0077c0;">John Doe</a>',
      start: (-24 * 5),
      duration: 15 * 24 * 60 * 60 * 1000,
      percent: 85,
      type: 'project',
      collapsed: true,
      style: {
        base: {
          fill: null,
          stroke: null,
        },
      },
    },
    {
      id: 2,
      label: 'With great power comes great responsibility',
      user:
        '<a href="https://www.google.com/search?q=Peter+Parker" target="_blank" style="color:#0077c0;">Peter Parker</a>',
      parentId: 1,
      start: (-24 * 4),
      duration: 4 * 24 * 60 * 60 * 1000,
      percent: 50,
      type: 'milestone',
      collapsed: true,
      style: {
        base: {
          fill: '#1EBC61',
          stroke: '#0EAC51',
        },
      },
    },
    {
      id: 3,
      label: 'Courage is being scared to death, but saddling up anyway.',
      user:
        '<a href="https://www.google.com/search?q=John+Wayne" target="_blank" style="color:#0077c0;">John Wayne</a>',
      parentId: 2,
      start: (-24 * 3),
      duration: 2 * 24 * 60 * 60 * 1000,
      percent: 100,
      type: 'task',
    },
    {
      id: 4,
      label: 'Put that toy AWAY!',
      user:
        '<a href="https://www.google.com/search?q=Clark+Kent" target="_blank" style="color:#0077c0;">Clark Kent</a>',
      start: (-24 * 2),
      duration: 2 * 24 * 60 * 60 * 1000,
      percent: 50,
      type: 'task',
      dependentOn: [3]
    },
    {
      id: 5,
      label:
        'One billion, gajillion, fafillion... shabadylu...mil...shabady......uh, Yen.',
      user:
        '<a href="https://www.google.com/search?q=Austin+Powers" target="_blank" style="color:#0077c0;">Austin Powers</a>',
      parentId: 4,
      start: (0),
      duration: 2 * 24 * 60 * 60 * 1000,
      percent: 10,
      type: 'milestone',
      style: {
        base: {
          fill: '#0287D0',
          stroke: '#0077C0'
        }
      }
    },
    {
      id: 6,
      label: 'Butch Mario and the Luigi Kid',
      user:
        '<a href="https://www.google.com/search?q=Mario+Bros" target="_blank" style="color:#0077c0;">Mario Bros</a>',
      parentId: 5,
      start: (24),
      duration: 1 * 24 * 60 * 60 * 1000,
      percent: 50,
      type: 'task',
      collapsed: true,
      style: {
        base: {
          fill: '#8E44AD',
          stroke: '#7E349D'
        }
      }
    },
    {
      id: 7,
      label: 'Devon, the old man wanted me, it was his dying request',
      user:
        '<a href="https://www.google.com/search?q=Knight+Rider" target="_blank" style="color:#0077c0;">Knight Rider</a>',
      parentId: 2,
      dependentOn: [6],
      start: (24 * 2),
      duration: 4 * 60 * 60 * 1000,
      percent: 20,
      type: 'task',
      collapsed: true
    },
    {
      id: 8,
      label: 'Hey, Baby! Anybody ever tell you I have beautiful eyes?',
      user:
        '<a href="https://www.google.com/search?q=Johhny+Bravo" target="_blank" style="color:#0077c0;">Johhny Bravo</a>',
      parentId: 7,
      dependentOn: [7],
      start: (24 * 3),
      duration: 1 * 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    },
    {
      id: 9,
      label:
        'This better be important, woman. You are interrupting my very delicate calculations.',
      user:
        '<a href="https://www.google.com/search?q=Dexter\'s+Laboratory" target="_blank" style="color:#0077c0;">Dexter\'s Laboratory</a>',
      parentId: 8,
      dependentOn: [8, 7],
      start: (24 * 4),
      duration: 4 * 60 * 60 * 1000,
      percent: 20,
      type: 'task',
      style: {
        base: {
          fill: '#8E44AD',
          stroke: '#7E349D'
        }
      }
    },
    {
      id: 10,
      label: 'current task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 5),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    },
    {
      id: 11,
      label: 'test task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 6),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    },
    {
      id: 12,
      label: 'test task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 7),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task',
      parentId: 11
    },
    {
      id: 13,
      label: 'test task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 8),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    },
    {
      id: 14,
      label: 'test task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 9),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    },
    {
      id: 15,
      label: 'test task',
      user:
        '<a href="https://www.google.com/search?q=Johnattan+Owens" target="_blank" style="color:#0077c0;">Johnattan Owens</a>',
      start: (24 * 16),
      duration: 24 * 60 * 60 * 1000,
      percent: 0,
      type: 'task'
    }];
}
