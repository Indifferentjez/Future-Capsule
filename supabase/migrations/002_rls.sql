alter table messages enable row level security;
alter table prompts enable row level security;

drop policy if exists "Users read own messages" on messages;
drop policy if exists "Users insert own messages" on messages;
drop policy if exists "Users update own messages" on messages;
drop policy if exists "Users delete own messages" on messages;
drop policy if exists "Prompts are readable by everyone" on prompts;

create policy "Users read own messages"
  on messages for select using (auth.uid() = user_id);
create policy "Users insert own messages"
  on messages for insert with check (auth.uid() = user_id);
create policy "Users update own messages"
  on messages for update using (auth.uid() = user_id);
create policy "Users delete own messages"
  on messages for delete using (auth.uid() = user_id);

create policy "Prompts are readable by everyone"
  on prompts for select using (true);
