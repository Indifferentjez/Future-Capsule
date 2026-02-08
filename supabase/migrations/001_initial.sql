-- prompts (seed data)
create table if not exists prompts (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  time_horizon text not null check (time_horizon in ('short','mid','long')),
  intensity text not null check (intensity in ('light','deep')),
  text text not null
);

-- messages
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('text','audio','video')),
  text_content text,
  media_path text,
  deliver_at timestamptz not null,
  deliver_mode text not null check (deliver_mode in ('date','birthday')),
  birthday_day int,
  birthday_month int,
  timezone text,
  guided_mode boolean not null default true,
  selected_prompts jsonb default '[]',
  song_title text,
  song_artist text,
  song_url text,
  status text not null default 'scheduled' check (status in ('scheduled','delivered','opened')),
  created_at timestamptz not null default now()
);

create index if not exists idx_messages_user on messages(user_id);
create index if not exists idx_messages_deliver on messages(status, deliver_at) where status = 'scheduled';
