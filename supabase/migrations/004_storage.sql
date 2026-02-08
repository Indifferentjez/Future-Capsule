-- Create bucket for capsule media (run in Supabase Dashboard SQL or via CLI)
insert into storage.buckets (id, name, public)
values ('capsule-media', 'capsule-media', false)
on conflict (id) do nothing;

-- RLS: users can only access their own folder
create policy "Users can upload to own folder"
  on storage.objects for insert
  with check (bucket_id = 'capsule-media' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Users can read own objects"
  on storage.objects for select
  using (bucket_id = 'capsule-media' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Users can update own objects"
  on storage.objects for update
  using (bucket_id = 'capsule-media' and (storage.foldername(name))[1] = auth.uid()::text);

create policy "Users can delete own objects"
  on storage.objects for delete
  using (bucket_id = 'capsule-media' and (storage.foldername(name))[1] = auth.uid()::text);
